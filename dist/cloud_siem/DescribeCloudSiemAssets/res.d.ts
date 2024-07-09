export interface DescribeCloudSiemAssetsResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 资产ID。
             * @example `123`
             */
            Id: number;
            /**
             * 资产同步时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 资产最后更新时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * siem主账号ID。
             * @example `1276085894174392`
             */
            Aliuid: number;
            /**
             * 资产关联账号ID。
             * @example `176555323***`
             */
            SubUserId: number;
            /**
             * 事件UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 事件关联告警UUID。
             * @example `sas_71e24437d2797ce8fc59692905a4****`
             */
            AlertUuid: string;
            /**
             * 资产名称。
             * @example `zsw-agentless-centos****`
             */
            AssetName: string;
            /**
             * 资产类型。取值：
             * - ip：ip
             * - domain：域名
             * - url：url
             * - process：进程
             * - file：文件
             * - host：主机
             * @example `domain`
             */
            AssetType: string;
            /**
             * 资产展示信息 json数组格式。
             * @example `[{"KeyName": "${aliyun.siem.asset.asset_name}","Values": "zsw-agentless-ubuntu20","Key": "asset_name"}]`
             */
            AssetInfo: {
                /**
                 * 告警详细属性key。
                 * @example `suspicious.wbd.wb.trojanpath`
                 */
                Key: string;
                /**
                 * 告警详细数据名称。
                 * @example `Trojan Path`
                 */
                KeyName: string;
                /**
                 * 告警详细数据值。
                 * @example `/root/test33.php`
                 */
                Values: string;
            }[];
            /**
             * 资产逻辑ID。
             * @example `0616caeb-acb8-45e0-8520-4ee5fbe251f0`
             */
            AssetId: string;
            /**
             * 实体来源云Code。  取值：
             * - aliyun：阿里云
             * - qcloud：腾讯云
             * - hcloud：华为云
             * @example `aliyun`
             */
            CloudCode: string;
        }[];
    };
}
