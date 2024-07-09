export interface CreateDBInstanceRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例付费类型。
     * - **PREPAY**：包年包月
     * - **POSTPAY**：按量付费
     * @example `PREPAY`
     */
    "PayType": string;
    /**
     * 实例节点数量，最小为2。
     * @example `2`
     */
    "DBNodeCount"?: number;
    /**
     * 节点规格：
     * - **polarx.x4.medium.2e**：2核8 GB
     * - **polarx.x4.large.2e**：4核16 GB
     * - **polarx.x8.large.2e**：4核32 GB
     * - **polarx.x4.xlarge.2e**：8核32 GB
     * - **polarx.x8.xlarge.2e**：8核64 GB
     * - **polarx.x4.2xlarge.2e**：16核64 GB
     * - **polarx.x8.2xlarge.2e**：16核128 GB
     * - **polarx.x4.4xlarge.2e**：32核128 GB
     * - **polarx.x8.4xlarge.2e**：32核256 GB
     * - **polarx.st.8xlarge.2e**：60核470 GB
     * - **polarx.st.12xlarge.2e**：90核720 GB
     * @example `polarx.x4.2xlarge.2d`
     */
    "DBNodeClass"?: string;
    /**
     * 幂等请求串，保持每次创建不同即可。
     * @example `xxxxxx-xxx`
     */
    "ClientToken"?: string;
    /**
     * 网络类型，仅支持VPC网络。
     * @example `vpc`
     */
    "NetworkType"?: string;
    /**
     * VPC ID。
     * @example `vpc-*****`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-*********`
     */
    "VSwitchId"?: string;
    /**
     * 预付费时，可以选择买几个月或者几年。
     * > Period设置为Year时，该参数支持的取值为1、2、3。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 收费周期，包年包月只能选Year、Month， 按量付费默认选择Hour。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 可以为空，资源组ID，暂时不支持。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否自动续费，默认为true。
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * mysql引擎版本，5.7或者8.0。
     * @example `5.7`
     */
    "EngineVersion": string;
    /**
     * 是否为只读实例。
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    "IsReadDBInstance"?: boolean;
    /**
     * 如果为只读实例，需要指定主实例。
     * @example `pxc-*********`
     */
    "PrimaryDBInstanceName"?: string;
    /**
     * 拓扑类型：
     * - **3azones**：三可用区；
     * - **1azone**：单可用区。
     * @example `3azones`
     */
    "TopologyType": string;
    /**
     * 主可用区。
     * @example `cn-shenzhen-e`
     */
    "PrimaryZone"?: string;
    /**
     * 次可用区。
     * @example `cn-shenzhen-a`
     */
    "SecondaryZone"?: string;
    /**
     * 第三可用区。
     * @example `cn-shenzhen-e`
     */
    "TertiaryZone"?: string;
    /**
     * 实例可用区。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 计算节点规格：
     * - **polarx.x4.medium.2e**：2核8 GB
     * - **polarx.x4.large.2e**：4核16 GB
     * - **polarx.x8.large.2e**：4核32 GB
     * - **polarx.x4.xlarge.2e**：8核32 GB
     * - **polarx.x8.xlarge.2e**：8核64 GB
     * - **polarx.x4.2xlarge.2e**：16核64 GB
     * - **polarx.x8.2xlarge.2e**：16核128 GB
     * - **polarx.x4.4xlarge.2e**：32核128 GB
     * - **polarx.x8.4xlarge.2e**：32核256 GB
     * - **polarx.st.8xlarge.2e**：60核470 GB
     * - **polarx.st.12xlarge.2e**：90核720 GB
     * @example `polarx.x4.medium.2e`
     */
    "CnClass"?: string;
    /**
     * 存储节点规格：
     * - **mysql.n4.medium.25**：2核8 GB
     * - **mysql.n4.large.25**：4核16 GB
     * - **mysql.x8.large.25**：4核32 GB
     * - **mysql.n4.xlarge.25**：8核32 GB
     * - **mysql.x8.xlarge.25**：8核64 GB
     * - **mysql.n4.2xlarge.25**：16核64 GB
     * - **mysql.x8.2xlarge.25**：16核128 GB
     * - **mysql.x4.4xlarge.25**：32核128 GB
     * - **mysql.x8.4xlarge.25**：32核256 GB
     * - **mysql.st.8xlarge.25**：60核470 GB
     * - **mysql.st.12xlarge.25**：90核720 GB
     * @example `mysql.n4.medium.25`
     */
    "DnClass"?: string;
    /**
     * 计算节点个数。
     * @example `2`
     */
    "CNNodeCount"?: string;
    /**
     * 存储节点个数。
     * @example `2`
     */
    "DNNodeCount"?: string;
    /**
     * 创建的实例是否为列存只读实例。
     * @example `true`
     */
    "IsColumnarReadDBInstance"?: boolean;
    /**
     * 企业版: enterprise
     * 标准版: standard
     * @example `enterprise`
     */
    "Series"?: string;
    "DnStorageSpace"?: string;
}
