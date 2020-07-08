import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'rodrigo@email.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('rodrigo@email.com');
  });
});
