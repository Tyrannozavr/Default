import type { SignInResponse } from '~/types/auth'
import type { User } from '~/types/user';

export const authService = {
  async signIn(email: string, password: string) {
    const authStore = useAuthStore();
    authStore.clearTokens();
    const response = await useNuxtApp().$api<SignInResponse>('/auth/token', {
      method: 'POST',
      body: { email, password },
    });

    const { accessToken, refreshToken } = response;
    authStore.setTokens(accessToken, refreshToken);x
    return response;
  },

  async signUp(name: string, email: string, password: string) {
    return await useNuxtApp().$api<User>('/auth/signUp', {
      method: 'POST',
      body: { name, email, password },
    });
  },

  logout() {
    const authStore = useAuthStore();
    authStore.clearTokens();
    navigateTo('/')
  },
}