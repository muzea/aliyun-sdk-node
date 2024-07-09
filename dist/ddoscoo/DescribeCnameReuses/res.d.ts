export interface DescribeCnameReusesResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * CNAME复用信息。
     */
    CnameReuses: {
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 复用的CNAME值。
         * @example `4o6ep6q217k9****.aliyunddos0004.com`
         */
        Cname: string;
        /**
         * 是否已开启CNAME复用。取值：
         * - **0**：未开启
         * - **1**：已开启
         * @example `1`
         */
        Enable: number;
    }[];
}
