export type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  description: string;
  bgColor: string;
  textColor: string;
};

export type CounterProps = {
  end?: number;
  decimals?: number;
};

export type PracticeItem = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  link: string;
};

export type Params = {
  slug: string;
};
