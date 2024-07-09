export interface DescribeFabricConsortiumDeletableResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     */
    Result: {
        /**
         * 是否可删除
         * @example `true`
         */
        Deletable: boolean;
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 描述
         * @example `description`
         */
        Description: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 可用区
         * @example `cn-hangzhou`
         */
        ZoneId: string;
        /**
         * 域名前缀
         * @example `codename`
         */
        CodeName: string;
        /**
         * 联盟名称
         * @example `myconsortium`
         */
        ConsortiumName: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
    };
}
