export interface GetTokenListResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `5CED561E-A4E3-4842-8BB6-700BE2AE7784`
     */
    RequestId: string;
    TokenList: {
        /**
         * 返回Token信息列表。
         */
        Token: {
            /**
             * 终端名称。
             * @example `OTT`
             */
            PlatformName: string;
            /**
             * Token值。
             * @example `6000170200591aed94fc62fb5e0166b64d199b86d1e0128fd0`
             */
            Token: string;
            /**
             * 终端code。
             * @example `02`
             */
            PlatformType: string;
            /**
             * 创建时间。
             * @example `2017-05-16 20:16:20`
             */
            CreatedAt: string;
            /**
             * 更新时间。
             * @example `2017-05-16 20:16:20`
             */
            UpdatedAt: string;
            /**
             * 终端资源ID。
             * @example `6y23ph`
             */
            ResourceId: string;
            /**
             * 用户ClientID。
             * @example `200000`
             */
            ClientId: string;
        }[];
    };
}
