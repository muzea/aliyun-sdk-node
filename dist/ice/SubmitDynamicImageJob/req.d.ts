export interface SubmitDynamicImageJobRequest {
    /**
     * 任务名称
     * @example `SampleJob`
     */
    "Name"?: string;
    /**
     * 任务输入
     */
    "Input": {
        /**
         * 输入类型，取值：
         * 1. OSS：oss文件地址
         * 2. Media：媒资ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
         * OSS地址规则为：
         * 1. oss://bucket/object
         * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
         * > URL中的 OSS bucket 需要先添加到IMS[存储管理](~~440592~~)后再使用。
         * @example `oss://bucket/object.mp4`
         */
        Media: string;
    };
    /**
     * 任务输出
     */
    "Output": {
        /**
         * 输出类型，取值：
         * 1. OSS：oss文件地址
         * 2. Media：媒资ID
         * @example `Media`
         */
        Type: string;
        /**
         * 输出媒体，支持OSS地址和媒资ID两种。
         * OSS地址规则为
         * - oss://bucket/object
         * - http(s)://bucket.oss-[regionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
         * > URL中的 OSS bucket 需要先添加到IMS[存储管理](~~440592~~)后再使用。
         * @example `****96e8864746a0b6f3****`
         */
        Media: string;
    };
    /**
     * 截图模板配置
     */
    "TemplateConfig": {
        /**
         * 模板ID
         * @example `****96e8864746a0b6f3****
        `
         */
        TemplateId: string;
        /**
         * 覆盖参数
         */
        OverwriteParams: {
            /**
             * 动图格式，取值：
             * - **gif**。
             * - **webp**。
             * @example `gif`
             */
            Format: string;
            /**
             * 输出动图宽度。取值范围：[128, 4096]。
             * @example `1024`
             */
            Width: number;
            /**
             * 输出动图高度。取值范围：[128, 4096]。
             * @example `720`
             */
            Height: number;
            /**
             * 帧率。取值范围：[1, 60]。
             * @example `15`
             */
            Fps: number;
            /**
             * 扫描模式。可取值：
             * - **interlaced**：交叉扫描。
             * - **progressive**：顺序扫描。默认值。
             * @example `progressive`
             */
            ScanMode: string;
            /**
             * 是否开启横竖屏自适应（长短边模式）。取值：
             * - **true**：开启横竖屏自适应。
             * - **false**：关闭横竖屏自适应。
             * 默认值：**true**。
             * > 转码输出的宽对应输入片源的长边（竖屏为片源的高），高对应输入视频的短边（竖屏为片源的宽）。
             * @example `false`
             */
            LongShortMode: boolean;
            /**
             * 时间线参数
             */
            TimeSpan: {
                /**
                 * 开始时间点。
                 * - 格式：`hh:mm:ss[.SSS]`或`sssss[.SSS]`。
                 * - 取值范围 ：`[00:00:00.000,23:59:59.999]`或`[0.000，86399.999]`。
                 * @example `01:59:59.999 或 32000.23`
                 */
                Seek: string;
                /**
                 * 持续时长。
                 * - 格式：`hh:mm:ss[.SSS]`或`sssss[.SSS]`。
                 * - 取值范围 ：`[00:00:00.000,23:59:59.999]`或`[0.000，86399.999]`。
                 * @example `01:59:59.999 或 32000.23`
                 */
                Duration: string;
                /**
                 * 截尾时长，表示切掉尾部的若干时长。设置此值时，参数Duration失效。
                 * - 格式：`hh:mm:ss[.SSS]`或`sssss[.SSS]`。
                 * - 取值范围 ：`[00:00:00.000,23:59:59.999]`或`[0.000，86399.999]`。
                 * @example `01:59:59.999 或 32000.23`
                 */
                End: string;
            };
        };
    };
    /**
     * 调度配置
     */
    "ScheduleConfig"?: {
        /**
         * 管道ID
         * @example `****96e8864746a0b6f3****
        `
         */
        PipelineId: string;
        /**
         * 优先级，1-10，默认6。数值越大，优先级越高。
         * @example `6`
         */
        Priority: number;
    };
    /**
     * 用户自定义信息
     * @example `{"SampleKey": "SampleValue"}`
     */
    "UserData"?: string;
}
