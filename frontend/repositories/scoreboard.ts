import type { GetUserTableResponse } from '~/types/scoreboard';

export const scoreboardService = {
  async getUserTable() {
    return await useAPI<GetUserTableResponse>('/scoreboard/user/table');
  }
}