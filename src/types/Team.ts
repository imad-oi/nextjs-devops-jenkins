export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  avatarUrl?: string;
}
