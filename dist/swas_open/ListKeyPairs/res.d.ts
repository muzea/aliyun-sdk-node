export interface ListKeyPairsResponse {
    /**
     * 密钥对的总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 每页的返回结果个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 密钥对信息集合。
     */
    KeyPairs: {
        /**
         * 密钥对的创建时间。
         * @example `2024-05-06T02:28Z`
         */
        CreationTime: string;
        /**
         * 密钥对名称。长度为2~64个英文或中文字符。必须以大小写字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `testKeyPairName`
         */
        KeyPairName: string;
        /**
         * 公钥内容。
         * @example `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbO5Govwhb0iHzoMYKkIQxjlHyHH8nxFsW6KF5saxgYhOwdeIpWngpi+/NDWQKvuOnXFFDh/o3eJJkh3rqP+RlMggt4HLQWOd9TS0f4/cgbAzud1caW9PnankCr****`
         */
        PublicKey: string;
        /**
         * 轻量应用服务器实例ID。最多支持50个实例ID。
         */
        InstanceIds: string[];
    }[];
}
