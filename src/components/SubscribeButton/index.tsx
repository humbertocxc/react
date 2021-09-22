import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/dist/client/router';


interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {

    if(!session){
      signIn('github');
      return;
    }

    if(session.activeSubscription) {
      router.push('/posts')
      return;
    }

    try{
      const response = await api.post('/subscribe')
      console.log(session)

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Inscrever-se
    </button>
  )
}