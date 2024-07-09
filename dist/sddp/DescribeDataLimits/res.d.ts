export interface DescribeDataLimitsResponse {
    /**
     * 当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989***`
     */
    RequestId: string;
    /**
     * 每页最多显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数据条数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 数据资产列表。
     */
    Items: {
        /**
         * 是否支持异常事件检测。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SupportEvent: boolean;
        /**
         * 失败原因。
         * @example `密码不正确`
         */
        ErrorMessage: string;
        /**
         * 数据检测状态。取值：
         * - **0**：就绪。
         * - **1**：运行中。
         * - **2**：连通性测试中。
         * - **3**：连通性测试通过。
         * - **4**：连通性测试未通过。
         * @example `3`
         */
        CheckStatus: number;
        /**
         * 数据所属区域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 租户别名。
         * @example `insta_gram`
         */
        TenantName: string;
        /**
         * 下一次的执行时间。格式：时间戳。单位：毫秒。
         * @example `1676620236000`
         */
        NextStartTime: number;
        /**
         * 自建数据库端口号。
         * @example `3306`
         */
        Port: number;
        /**
         * 数据检测状态名称。
         * @example `联通性检测状态`
         */
        CheckStatusName: string;
        /**
         * 敏感数据采样。取值：**0**、**5**、**10**。单位：条。
         * @example `5`
         */
        SamplingSize: number;
        /**
         * 指定待查询资产的父级ID，取值：**bucket、db、project**等。
         * @example `project`
         */
        ParentId: string;
        /**
         * 脱敏权限状态。取值：
         * - **1**：开启。
         * - **0**：关闭。
         * @example `1`
         */
        DatamaskStatus: number;
        /**
         * 数据表/文件总数。
         * @example `100`
         */
        ProcessTotalCount: number;
        /**
         * 实例、库、Bucket数据资产所属产品类型。取值：
         * - **1**：MaxCompute
         * - **2**：OSS
         * - **3**：ADS
         * - **4**：OTS
         * - **5**：RDS
         * - **6**：SELF_DB
         * @example `5`
         */
        ResourceType: number;
        /**
         * 错误码。
         * @example `connect_network_error`
         */
        ErrorCode: string;
        /**
         * OCR状态。取值：
         * - **0**：关闭。
         * - **1**：开启。
         * @example `1`
         */
        OcrStatus: number;
        /**
         * 原始日志存储时间。单位：天。
         * @example `30`
         */
        LogStoreDay: number;
        /**
         * 防泄漏开关。取值：
         * - **0**：关闭。
         * - **1**：开启（默认值）。
         * @example `1`
         */
        EventStatus: number;
        /**
         * 是否支持扫描。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SupportScan: boolean;
        /**
         * 最后一次全部扫描完成的时间。
         * - 格式：时间戳
         * - 单位：毫秒
         * @example `145600000`
         */
        LastFinishedTime: number;
        /**
         * 数据所属用户名。
         * @example `tsts`
         */
        UserName: string;
        /**
         * 审计状态。取值：
         * - **1**：开启审计。
         * - **0**：关闭审计。
         * @example `1`
         */
        AuditStatus: number;
        /**
         * 是否支持ocr。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SupportOcr: boolean;
        /**
         * 数据库类型。取值：**MySQL**，**SQLServer**，**Oracle**，**PostgreSQL**，**MongoDB**等。
         * @example `MySQL`
         */
        EngineType: string;
        /**
         * 数据资产表所属的资产实例ID。
         * @example `12332`
         */
        InstanceId: string;
        /**
         * 数据资产表包含的字段总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 实例备注信息。
         * @example `123`
         */
        InstanceDescription: string;
        /**
         * 数据库版本。
         * @example `2.0`
         */
        DbVersion: string;
        /**
         * 资产所在的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 创建时间。格式：时间戳。单位：毫秒。
         * @example `145600000`
         */
        GmtCreate: number;
        /**
         * 是否支持审计。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SupportAudit: boolean;
        /**
         * 是否自动扫描。取值：
         * - **0**：不自动。
         * - **1**：自动。
         * @example `1`
         */
        AutoScan: number;
        /**
         * 数据来源产品类型编码。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `RDS`
         */
        ResourceTypeCode: string;
        /**
         * 是否支持脱敏。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        SupportDatamask: boolean;
        /**
         * 扫描状态。取值：
         * - **-1**：无效。
         * - **0**：等待。
         * - **1**：扫描中。
         * - **2**：暂停。
         * - **3**：完成。
         * @example `3`
         */
        ProcessStatus: number;
        /**
         * 数据的唯一标识ID。
         * @example `1`
         */
        Id: number;
        /**
         * 识别权限状态。取值：
         * - **1**：开启。
         * - **0**：关闭。
         * @example `1`
         */
        Enable: number;
        /**
         * Agent审计中PrivateLink使用的安全组ID列表。
         */
        SecurityGroupIdList: string[];
        /**
         * Agent审计中PrivateLink使用的交换机ID列表。
         */
        VSwitchIdList: string[];
        /**
         * 数据资产所属的vpcid。
         * @example `vpc-2zevcqke6hh09c41****`
         */
        VpcId: string;
        /**
         * 成员账号ID。
         * @example `**********8103
        `
         */
        MemberAccount: number;
    }[];
}
