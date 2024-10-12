import type { GetUserTableResponse } from '~/types/scoreboard';

export const scoreboardService = {
  async getUserTable() {
    return useAPI<GetUserTableResponse>('/scoreboard/user/table');
  }
}