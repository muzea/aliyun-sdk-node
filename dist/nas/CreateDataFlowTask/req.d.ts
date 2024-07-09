export interface CreateDataFlowTaskRequest {
    /**
     * 文件系统ID。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * - CPFS智算版：必须以`bmcpfs-`开头，例如bmcpfs-0015\*\*\*\*。
     * >仅中国站支持CPFS文件系统。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 数据流动ID。
     * @example `dfid-194433a5be31****`
     */
    "DataFlowId": string;
    /**
     * 当指定SrcTaskId时，会从目标数据流动任务拷贝TaskAction、DataType和EntryList参数信息，您无需再单独指定。
     * @example `task-****`
     */
    "SrcTaskId"?: string;
    /**
     * 数据流动任务类型。
     * 取值：
     * - Import：从源端存储将指定的数据导入至CPFS。
     * - Export：将CPFS上指定的数据导出至源端存储。
     * - Evict：释放CPFS上文件的数据块，释放后文件在CPFS上只保留元数据，您仍能查询该文件，但文件数据块已清除，不占用CPFS上的存储容量。当访问该文件数据时，将再从源端存储按需加载。
     * - Inventory：获取CPFS上数据流动管理的文件清单，可提供文件在数据流动中的缓存状态。
     * > 目前CPFS智算版只支持Import和Export。
     * @example `Import`
     */
    "TaskAction"?: string;
    /**
     * 数据流动任务操作的数据类型。
     * 取值：
     * - Metadata：文件的元数据，包括文件的timestamp、 ownership、permission等属性信息。选择Metadata，只会导入文件的元数据，用户只能看到该文件，但访问该文件数据时，数据从源端存储按需加载。
     * - Data：文件的数据块。
     * - MetaAndData：文件的元数据和数据块。
     * @example `Metadata`
     */
    "DataType"?: string;
    /**
     * 数据流动任务执行的目录。
     * 限制：
     * - 长度为1~1023个字符。
     * - 使用UTF-8编码。
     * - 必须以正斜线（/）开头和结尾。
     * - 一次只能列举一个目录。
     * - 当TaskAction为Export时，该目录必须是FileSystemPath内的相对路径。
     * - 当TaskAction为Import时，该目录必须是SourceStoragePath内的相对路径。
     * @example `/path_in_cpfs/`
     */
    "Directory"?: string;
    /**
     * 数据流动任务执行的文件列表。
     * 限制：
     * - 使用UTF-8编码。
     * - 文件列表总长度小于64KB。
     * - 文件列表采用JSON格式。
     * - 单个文件路径长度为 1~1023 个字符，且必须以正斜线（/）开头。
     * - 当TaskAction为Import时，列表中每个元素代表一个OSS Object名称。
     * - 当TaskAction为Export时，列表中每个元素代表一个CPFS文件路径。
     * @example `["/path_in_cpfs/file1", "/path_in_cpfs/file2"]`
     */
    "EntryList"?: string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和NAS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但FileSystemId为空。
     * - false（默认值）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 同名文件冲突策略。
     * 取值：
     * - SKIP_THE_FILE：跳过同名文件。
     * - KEEP_LATEST：比较更新时间，保留最新版本。
     * - OVERWRITE_EXISTING：强制覆盖同名文件。
     * > 当文件系统类型为cpfs时，该参数不生效。
     * @example `SKIP_THE_FILE`
     */
    "ConflictPolicy"?: string;
}
