export interface SetTransferCalleePoolConfigRequest {
    /**
     * 呼转号码信息。
     */
    "Details": {
        /**
         * 主叫号码。
         * @example `150****0000`
         */
        Caller: string;
        /**
         * 被叫号码。已备案的号码。
         * 您可以通过[SubmitHotlineTransferRegister](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-submithotlinetransferregister?spm=a2c4g.11186623.0.0.7b784120BH0XPT)接口，提交号码备案。
         * @example `151****0000`
         */
        Called: string;
    }[];
    /**
     * 呼转号码。
     * 您已在[语音服务控制台真实号码管理页面](https://dyvms.console.aliyun.com/number/list/400)购买的400号码。
     * @example `400903****`
     */
    "PhoneNumber": string;
    /**
     * 资质ID。您可以通过[GetHotlineQualificationByOrder](~~393548~~)接口获取。
     * @example `190***`
     */
    "QualificationId": string;
    /**
     * 呼叫模式。取值：
     * - **roundRobin**：轮询。
     * - **random**：随机。
     * @example `roundRobin`
     */
    "CalledRouteMode": string;
}
