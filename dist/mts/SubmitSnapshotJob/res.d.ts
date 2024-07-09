export interface SubmitSnapshotJobResponse {
    /**
     * 请求ID。
     * @example `19B6D8C5-A5DD-467A-B435-29D393C71E2D`
     */
    RequestId: string;
    /**
     * 截图作业。
     */
    SnapshotJob: {
        /**
         * 任务创建时间。
         * @example `2021-05-19T03:11:48Z`
         */
        CreationTime: string;
        /**
         * 截图配置。
         */
        SnapshotConfig: {
            /**
             * 截图开始时间。单位：毫秒。
             * @example `5`
             */
            Time: string;
            /**
             * 拼图配置。
             */
            TileOut: {
                /**
                 * 图片间距。
                 * - 默认：**0**。
                 * - 单位：px。
                 * @example `0`
                 */
                Padding: string;
                /**
                 * 背景颜色。
                 * - 默认：**black**。
                 * - 可取值范围：**颜色关键字**，**random**。
                 * > 其中颜色关键字支持三种格式，比如黑色，支持Black，black，#000000。
                 * @example `black`
                 */
                Color: string;
                /**
                 * 选取单图片步长。
                 * @example `3`
                 */
                CellSelStep: string;
                /**
                 * 单图片高度。默认截图输出分辨率高度。
                 * @example `100`
                 */
                CellHeight: string;
                /**
                 * 单图片宽度。默认截图输出分辨率宽度。
                 * @example `100`
                 */
                CellWidth: string;
                /**
                 * 外框宽度。
                 * - 默认：**0**。
                 * - 单位：px。
                 * @example `5`
                 */
                Margin: string;
                /**
                 * 图片拼合列数。默认：**10**。
                 * @example `10`
                 */
                Columns: string;
                /**
                 * 是否保留单图片。可取值：
                 * - **true**：保留。
                 * - **false**：不保留。
                 * - 默认：**true**。
                 * @example `false`
                 */
                IsKeepCellPic: string;
                /**
                 * 图片拼合行数。默认：**10**。
                 * @example `10`
                 */
                Lines: string;
            };
            /**
             * 截图间隔时间。
             * - 若指定则表示序列截图，且值大于0。
             * - 单位：秒。
             * - 默认值：**10**。
             * @example `20`
             */
            Interval: string;
            /**
             * 截图类型。默认值：**normal**。可取值：
             * - **normal**：普通帧。
             * - **intra**：I帧（关键帧）。
             * > 如果请求参数中将FrameType参数设置为I帧（关键帧），将只截取关键帧。如果指定的时间节点为非关键帧，则就近选取关键帧。在同等截图规则下，关键帧截图比普通帧截图速度快。
             * @example `intra`
             */
            FrameType: string;
            /**
             * 截图输出图片宽度。
             * @example `8`
             */
            Width: string;
            /**
             * 截图输出图片高度。
             * @example `8`
             */
            Height: string;
            /**
             * 截图输出OSS配置。
             */
            OutputFile: {
                /**
                 * 指定角色的ARN。格式：acs:ram::$accountID:role/$roleName。
                 * @example `acs:ram::1:role/testrole`
                 */
                RoleArn: string;
                /**
                 * 截图输出文件（OSS Object）。
                 * @example `test.png`
                 */
                Object: string;
                /**
                 * 截图输出OSS Bucket所在数据中心（OSS Location）。
                 * @example `example-location`
                 */
                Location: string;
                /**
                 * 截图输出文件所在OSS Bucket。
                 * @example `example`
                 */
                Bucket: string;
            };
            /**
             * 截图数量。若指定则表示序列截图。
             * @example `10`
             */
            Num: string;
            /**
             * 拼图任务大图的输出OSS配置。
             */
            TileOutputFile: {
                /**
                 * 指定角色的ARN。格式：acs:ram::$accountID:role/$roleName。
                 * @example `acs:ram::1:role/testrole`
                 */
                RoleArn: string;
                /**
                 * 输出文件 （OSS Object）。
                 * @example `example.png`
                 */
                Object: string;
                /**
                 * 输出OSS Bucket所在数据中心（OSS Location）。
                 * @example `example-location`
                 */
                Location: string;
                /**
                 * 输出文件所在OSS Bucket。
                 * @example `example`
                 */
                Bucket: string;
            };
            TimeArray: {
                /**
                 * 指定时间点数组。
                 */
                TimePointList: number[];
            };
        };
        /**
         * 截图状态。取值：
         * - **Submitted**：已提交。
         * - **Snapshoting**：截图中。
         * - **Success**：截图成功。
         * - **Fail**：截图失败。
         * @example `Snapshoting`
         */
        State: string;
        /**
         * 分析失败时错误信息。若成功则不返回此参数。
         * @example `The resource operated InputFile is bad`
         */
        Message: string;
        /**
         * MNS通知用户作业完成的结果。
         */
        MNSMessageResult: {
            /**
             * 成功时消息ID。若失败则不返回此参数。
             * @example `799454621135656C7F815F198A76****`
             */
            MessageId: string;
            /**
             * 失败时错误信息。若成功则不返回此参数。
             * @example `The resource operated InputFile is bad`
             */
            ErrorMessage: string;
            /**
             * 失败时错误码。若成功则不返回此参数。
             * @example `InvalidParameter`
             */
            ErrorCode: string;
        };
        /**
         * 作业输入。
         */
        Input: {
            /**
             * 指定角色的ARN。格式：acs:ram::$accountID:role/$roleName。
             * @example `acs:ram::1:role/testrole`
             */
            RoleArn: string;
            /**
             * 输入文件（OSS Object）。
             * @example `example.flv`
             */
            Object: string;
            /**
             * 输入OSS Bucket所在数据中心（OSS Location）。
             * @example `example-location'`
             */
            Location: string;
            /**
             * 输入文件所在OSS Bucket。
             * @example `example`
             */
            Bucket: string;
        };
        /**
         * 截取图片的数量。
         * @example `1`
         */
        Count: string;
        /**
         * 拼图图片数量。
         * @example `5`
         */
        TileCount: string;
        /**
         * 用户自定义数据。
         * @example `testid-001`
         */
        UserData: string;
        /**
         * 分析失败时错误码。若成功则不返回此参数。
         * @example `ResourceContentBad`
         */
        Code: string;
        /**
         * 管道ID。
         * @example `dd3dae411e704030b921e52698e5****`
         */
        PipelineId: string;
        /**
         * 截图作业ID。
         * @example `f4e3b9ba9f3840c39d6e288056f0****`
         */
        Id: string;
    };
}
