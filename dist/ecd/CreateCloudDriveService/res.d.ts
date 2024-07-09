export interface CreateCloudDriveServiceResponse {
    /**
     * 请求ID。
     * @example `062B1439-709A-580E-85DF-CE97A156****`
     */
    RequestId: string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-778205****`
     */
    CdsId: string;
    /**
     * 云存储服务名称。
     * @example `CDS_Windows_1126`
     */
    CdsName: string;
    /**
     * 企业网盘最大存储峰值。单位：Byte（字节）。
     * @example `5368709120`
     */
    MaxSize: string;
    /**
     * 办公网络类型。
     * @example `AD_CONNECTOR`
     */
    OfficeSiteType: string;
    /**
     * 云企业网CEN实例ID。
     * > 如果想要通过VPC连接的方式接入云电脑，可以将办公网络加入到云企业网实例中。该云企业网实例为本地网络通过VPN或者专线接入的云企业网实例。
     * @example `cen-638u3wxds9snyc****`
     */
    CenId: string;
    /**
     * AD办公网络对应的AD域名称。
     * @example `test1.local`
     */
    DomainName: string;
    /**
     * 订单ID。您可以在阿里云用户中心的订单管理页面获取。
     * @example `214552063030752`
     */
    OrderId: string;
    /**
     * 错误码。
     * @example `ExistConflictCds`
     */
    ErrorCode: string;
    /**
     * 与当前要创建的网盘冲突的存量网盘或网盘订单。
     */
    ConflictCdsAndOrder: {
        /**
         * 冲突的网盘信息。
         */
        ConflictCds: {
            /**
             * 企业网盘ID。
             * @example `cn-hangzhou+cds-778205****`
             */
            CdsId: string;
            /**
             * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
        /**
         * 冲突的未支付的网盘订单信息（预付费网盘的订单）。
         */
        ConflictOrder: {
            /**
             * 企业网盘ID（订单尚未支付，网盘不可使用）。
             * @example `cn-hangzhou+cds-778205****`
             */
            CdsId: string;
            /**
             * 订单ID。您可以在阿里云用户中心的**订单管理**页面获取。
             * @example `22442411898****`
             */
            OrderId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
