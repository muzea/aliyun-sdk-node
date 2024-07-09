export interface QuerySnapshotJobListResponse {
    SnapshotJobList: {
        /**
         * 截图作业列表。
         */
        SnapshotJob: {
            /**
             * 任务创建时间。
             * @example `2021-06-30T12:34:29Z`
             */
            CreationTime: string;
            /**
             * 截图配置。
             */
            SnapshotConfig: {
                /**
                 * 截图开始时间。单位：毫秒。
                 * @example `4`
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
                     * @example `8`
                     */
                    CellHeight: string;
                    /**
                     * 单图片宽度。默认截图输出分辨率宽度。
                     * @example `8`
                     */
                    CellWidth: string;
                    /**
                     * 外框宽度。
                     * - 默认：**0**。
                     * - 单位：px。
                     * @example `0`
                     */
                    Margin: string;
                    /**
                     * 图片拼合列数。默认：**10**。
                     * @example `10`
                     */
                    Columns: string;
                    /**
                     * 是否保留单图片。默认：**true**。
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
                 * @example `10`
                 */
                Interval: string;
                /**
                 * 截图类型。
                 * - **normal**：普通帧。
                 * - **intra**：I帧。
                 * - 默认值：**intra**。
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
                     * 截图输出文件 （OSS Object）。
                     * @example `example.png`
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
             * 截图状态。
             * - **Submitted**：已提交。
             * - **Snapshoting**：截图中。
             * - **Success**：截图成功。
             * - **Fail**：截图失败。
             * @example `Snapshoting`
             */
            State: string;
            /**
             * 分析失败时错误信息。如成功则不返回此消息。
             * @example `The resource operated InputFile is bad`
             */
            Message: string;
            /**
             * MNS通知用户作业完成的结果。
             */
            MNSMessageResult: {
                /**
                 * 成功时消息ID。如失败则不返回此参数。
                 * @example `799454621135656C7F815F198A76****`
                 */
                MessageId: string;
                /**
                 * 失败时错误信息。如成功则不返回此参数。
                 * @example `The resource operated InputFile is bad`
                 */
                ErrorMessage: string;
                /**
                 * 失败时错误码。如成功则不返回此参数。
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
                 * 输入文件 （OSS Object）。
                 * @example `example.flv`
                 */
                Object: string;
                /**
                 * 输入OSS Bucket所在数据中心（OSS Location）。
                 * @example `example-location`
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
             * @example `7`
             */
            TileCount: string;
            /**
             * 用户自定义数据。
             * @example `testid-001`
             */
            UserData: string;
            /**
             * 分析失败时错误码。如成功则不返回此参数。
             * @example `InvalidParameter`
             */
            Code: string;
            /**
             * 管道ID。
             * @example `b11c171cced04565b1f38f1ecc39****`
             */
            PipelineId: string;
            /**
             * 截图作业ID。
             * @example `cc6cbef8e8d5481ca536f5d2a466****`
             */
            Id: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `34BCAB31-2833-43A7-9FBD-B34302AB23EQ`
     */
    RequestId: string;
    NonExistSnapshotJobIds: {
        /**
         * 不存在的截图作业ID列表。
         */
        String: string[];
    };
    /**
     * 下一页标识，32位UUID。查询结果大于一页时返回，每次查询值都会更新。
     * @example `b11c171cced04565b1f38f1ecc39****`
     */
    NextPageToken: string;
}
