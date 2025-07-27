// Card Component Props
export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

// Button Component Props
export interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

// Post Props
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User Props
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Post Modal Props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

// Form Data Interface
export interface PostFormData {
  title: string;
  content: string;
}
