export interface ApplyDataFlowAutoRefreshRequest {
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 数据流动ID。
     * @example `dfid-194433a5be31****`
     */
    "DataFlowId": string;
    /**
     * 自动更新配置信息集合。
     */
    "AutoRefreshs": {
        /**
         * 自动更新目录，CPFS仅自动检查该目录下的源端数据是否发生更新并自动导入更新的数据。
         * 限制：
         * - 长度为2~1024个字符。
         * - 使用UTF-8编码。
         * - 必须以正斜线（/）开头和结尾。
         * > 该目录必须是CPFS上的已有目录，且必须位于开启了数据流动的Fileset中。
         * @example `/prefix1/prefix2/`
         */
        RefreshPath: string;
    }[];
    /**
     * 自动更新策略，源端数据更新以后，数据更新导入到CPFS的策略。包括：
     * - None：源端的数据更新不自动导入CPFS，用户可通过数据流动任务导入源端的数据更新。
     * - ImportChanged：源端的数据更新自动导入CPFS。
     * @example `None`
     */
    "AutoRefreshPolicy"?: string;
    /**
     * 自动更新的间隔时间。每隔该时间间隔，CPFS会检查目录内是否存在数据更新，如果有数据更新，启动自动更新任务。单位为分钟。
     * 取值范围：10~525600。默认值：10。
     * @example `10`
     */
    "AutoRefreshInterval"?: number;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和NAS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但FileSystemId为空。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
