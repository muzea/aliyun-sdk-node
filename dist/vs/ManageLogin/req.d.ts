export interface ManageLoginRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * 公钥名称，与KeyGroup至少存在一个
     * @example `mykey`
     */
    "KeyName"?: string;
    /**
     * 公钥分组，如果KeyName不存在，则下发KeyGroup内所有的公钥
     * @example `mygroup`
     */
    "KeyGroup"?: string;
    /**
     * 管理动作名，取值：
     * 1. open - 生效公钥，默认值
     * 2. close - 失效公钥
     * @example `open`
     */
    "ActionName"?: string;
}
