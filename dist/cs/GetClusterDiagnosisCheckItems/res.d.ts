export interface GetClusterDiagnosisCheckItemsResponse {
    /**
     * 请求ID。
     * @example `1DFFD8C6-259E-582B-8B40-002C17DC****`
     */
    request_id: string;
    /**
     * 状态代码。
     * @example `success`
     */
    code: string;
    /**
     * 检查是否成功。
     * @example `true`
     */
    is_success: boolean;
    /**
     * 检查项。
     */
    check_items: {
        /**
         * 描述。
         * @example `Check whether the node can access host dns service`
         */
        desc: string;
        /**
         * 显示名称。
         * @example `HostDNS`
         */
        display: string;
        /**
         * 检查项分组。
         * @example `Node`
         */
        group: string;
        /**
         * 检查项评估结果。
         * @example `normal`
         */
        level: string;
        /**
         * 检查结果信息。
         * @example `success`
         */
        message: string;
        /**
         * 检查项名称。
         * @example `HostDNS`
         */
        name: string;
        /**
         * 参考值。
         * @example `True`
         */
        refer: string;
        /**
         * 检查项值。
         * @example `True`
         */
        value: string;
    }[];
}
