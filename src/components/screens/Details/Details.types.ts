import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackParamListType = {
    Details: { _id: string };
};

export type PropType = NativeStackScreenProps<StackParamListType, 'Details'>;