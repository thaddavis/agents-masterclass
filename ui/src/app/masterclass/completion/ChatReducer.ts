type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type Action =
  | {
      type: "ADD_MESSAGE";
      payload: { id: string; role: "human" | "ai"; content: string };
    }
  | {
      type: "SET_COMPLETION_LOADING";
      payload: boolean;
    };

export function chatReducer(
  state: {
    messages: { id: string; role: "human" | "ai"; content: string }[];
    completionLoading: boolean;
  },
  action: Action
) {
  switch (action.type) {
    case "ADD_MESSAGE": {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: action.payload.id,
            content: action.payload.content,
            role: action.payload.role,
          },
        ],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialState: {
  messages: { id: string; role: "human" | "ai"; content: string }[];
  completionLoading: boolean;
} = {
  messages: [],
  completionLoading: false,
};
