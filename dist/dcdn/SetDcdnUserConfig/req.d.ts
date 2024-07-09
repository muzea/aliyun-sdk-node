export interface SetDcdnUserConfigRequest {
    /**
     * 功能ID。
     * @example `6`
     */
    "FunctionId": number;
    /**
     * 功能参数。
     * @example `\"argId\":12,\"argValue\":\"on\"`
     */
    "Configs": string;
}
