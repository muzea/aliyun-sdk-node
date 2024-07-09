export interface SaveBatchTaskForReserveDropListDomainRequest {
    /**
     * 联系人模板ID。
     * @example `123123`
     */
    "ContactTemplateId": string;
    /**
     * 域名列表。
     */
    "Domains": {
        /**
         * 万网域名示例。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 自定义DNS1。
         * > - 当**OrderActivateParam.N.AliyunDns**取值为**false**时，本参数才可用且必须传入。
         * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
         * @example `ns11.bigwww.com`
         */
        Dns1: string;
        /**
         * 自定义DNS2。
         * > - 当**AliyunDns**取值为**false**时，本参数才可用且必须传入。
         * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
         * @example `nsb.263idc.net`
         */
        Dns2: string;
    }[];
}
