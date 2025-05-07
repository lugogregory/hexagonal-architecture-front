export interface AppConfig {
  appName: string;
  api: Api;
  others?: {
    [key: string]: any;
  };
}

export interface Api {
  [key: string]: {
    url: string;
    methods: {
      [key: string]: string;
    }
  };
}

export interface BaseReq {
    url: string;
    endPoint: string;
}
