export interface QueryOTAJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `30F1BB8D-EDBF-44FD-BBC0-BE97DEA73991`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的升级批次信息。详情见以下Data所包含的参数。
     */
    Data: {
        /**
         * 批次创建时的时间，UTC格式。
         * @example `2019-12-28T02:43:10.000Z`
         */
        UtcCreate: string;
        /**
         * 设备升级失败后，自动重试时间间隔，单位：分钟。
         * 创建升级批次时，设置了失败重试策略，则返回该参数。
         * @example `60`
         */
        RetryInterval: number;
        /**
         * 批次类型。
         * - **VERIFY_FIRMWARE**：升级包验证批次。
         * - **UPGRADE_FIRMWARE**：批量升级批次。
         * @example `UPGRADE_FIRMWARE`
         */
        JobType: string;
        /**
         * 升级策略。
         * - **DYNAMIC**：动态升级。调用[CreateOTADynamicUpgradeJob](~~147887~~)创建的升级批次，该参数返回该值。
         * - **STATIC**：静态升级。调用[CreateOTAStaticUpgradeJob](~~147496~~)创建的升级批次，该参数返回该值。
         * @example `STATIC`
         */
        SelectionType: string;
        /**
         * 是否覆盖之前的升级任务。取值：
         * - **1**：不覆盖。若设备已有升级任务，则只执行已有任务。
         * - **2**：覆盖。设备只执行新的升级任务。
         * 不覆盖升级中的任务。
         * @example `1`
         */
        OverwriteMode: number;
        /**
         * 升级范围。
         * - **ALL**：全量升级。
         * - **SPECIFIC**：定向升级。
         * - **GRAY**：灰度升级。
         * > 调用[CreateOTADynamicUpgradeJob](~~147887~~)创建的动态升级批次，该参数仅返回ALL。
         * @example `SPECIFIC`
         */
        TargetSelection: string;
        /**
         * 设备升级超时时间，单位：分钟。
         * 创建升级批次时，设置了超时时间，则返回该参数。
         * @example `5`
         */
        TimeoutInMinutes: number;
        /**
         * 灰度升级的比例。
         * 仅升级范围为灰度升级时，返回该参数。
         * @example `50.00`
         */
        GrayPercent: string;
        /**
         * 物联网平台是否主动向设备推送升级任务。
         * @example `true`
         */
        NeedPush: boolean;
        /**
         * 批次的状态。
         * - **PLANNED**：计划中。批次已创建，但是定时时间未到。仅定时静态升级的批次可能返回该值。
         * - **IN_PROGRESS**：执行中。
         * - **COMPLETED**：已完成。
         * - **CANCELED**：已取消。
         * @example `IN_PROGRESS`
         */
        JobStatus: string;
        /**
         * 升级批次描述。
         * @example `batch upgrade`
         */
        JobDesc: string;
        /**
         * 批次最后一次修改时的时间，UTC格式。
         * @example `2019-12-28T02:43:10.000Z`
         */
        UtcModified: string;
        /**
         * 该批次任务开始执行时的时间，UTC格式。
         * @example `2019-12-28T02:43:10.000Z`
         */
        UtcStartTime: string;
        /**
         * 设备是否支持多模块同时升级。
         * - **false**（默认）：否，设备不支持多模块同时升级。
         * - **true**：是，设备支持多模块同时升级。
         * 更多信息，请参见[设备支持多模块同时升级说明表](~~58328~~)。
         * @example `false`
         */
        MultiModuleMode: boolean;
        /**
         * 该批次任务执行结束时的时间，UTC格式。
         * 仅已执行结束的升级批次才返回此参数。
         * @example `2019-12-29T02:43:10.000Z`
         */
        UtcEndTime: string;
        /**
         * 升级包名称。
         * @example `Firmware2`
         */
        Name: string;
        /**
         * 升级目标版本号。
         * @example `1.0.1`
         */
        DestVersion: string;
        /**
         * 定时升级结束的时间。仅定时升级任务且设置了定时升级结束时间时会返回该参数。
         * @example `2019-12-30T02:43:10.000Z`
         */
        UtcScheduleFinishTime: string;
        /**
         * 每分钟最多向多少个设备推送升级包下载URL。
         * @example `1000`
         */
        MaximumPerMinute: number;
        /**
         * 动态升级模式。取值范围：
         * - **1**：除了升级当前满足升级条件的设备，还将持续检查设备是否满足升级条件，对满足升级条件的设备进行升级。
         * - **2**：仅对后续上报新版本号的设备生效。
         * 仅升级策略为动态升级时，返回该参数。
         * @example `1`
         */
        DynamicMode: number;
        /**
         * 设备升级失败后，自动重试次数。
         * 创建升级批次时，设置了失败重试策略，则返回该参数。
         * @example `1`
         */
        RetryCount: number;
        /**
         * 升级包所属产品的ProductKey。
         * @example `a19mzPZ****`
         */
        ProductKey: string;
        /**
         * 分组升级的设备分组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 分组升级的设备分组ID。
         * @example `CtjzCkNuOxUR***`
         */
        GroupId: string;
        /**
         * 定时升级发起的时间。仅定时升级任务会返回该参数。
         * @example `2019-12-29T02:43:10.000Z`
         */
        UtcScheduleTime: string;
        /**
         * 升级批次ID，批次的唯一标识符。
         * @example `HvKuBpuk3rdk6E92CP****0200`
         */
        JobId: string;
        /**
         * 升级包文件的下载协议。
         * @example `HTTPS`
         */
        DownloadProtocol: string;
        /**
         * 是否App确认升级。
         * @example `false`
         */
        NeedConfirm: boolean;
        /**
         * 升级包ID。
         * @example `UfuxnwygsuSkVE0VCN****0100`
         */
        FirmwareId: string;
        Tags: {
            /**
             * 升级批次标签。
             */
            OtaTagDTO: {
                /**
                 * 标签名。
                 * @example `key1`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `value1`
                 */
                Value: string;
            }[];
        };
        SrcVersions: {
            SrcVersion: string[];
        };
    };
}
