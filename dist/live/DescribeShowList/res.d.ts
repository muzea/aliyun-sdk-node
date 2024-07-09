export interface DescribeShowListResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * **ShowList**为播放列表的详细信息。
     * Show为节目单中的节目详细信息，具体内容，请参见下表**Show**。
     * @example `ShowList[Show1, Show2, Show3...]`
     */
    ShowList: string;
    /**
     * 查询节目单。
     */
    ShowListInfo: {
        /**
         * 当前正在播放的节目ID。
         * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
         */
        CurrentShowId: string;
        /**
         * 最高优先级节目。
         * > 此配置只能在节目单未开始启动前设置。
         * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
         */
        HighPriorityShowId: string;
        /**
         * 最高优先级节目播放时间，格式为：yyyy-MM-dd'T'HH:mm:ss。
         * > 此配置只能在节目单未开始启动前设置。配置完成，节目单会在最高优先级播放时间进行切播，开始播放最高优先级节目（从当前正在播放的节目切播到最高级优先节目）。
         * @example `2021-11-23T12:30:00`
         */
        HighPriorityShowStartTime: string;
        ShowList: {
            /**
             * 播放列表的详细信息。
             */
            Show: {
                /**
                 * 单个节目播放时间长度。单位：秒。
                 * @example `20`
                 */
                Duration: number;
                /**
                 * 单个节目播放的循环次数。
                 * RepeatTimes为重复次数，示例：0表示重复0次（实际播放1次），1表示重复1次（实际播放2次），以此类推。
                 * @example `5`
                 */
                RepeatTimes: number;
                /**
                 * 资源信息。
                 */
                ResourceInfo: {
                    /**
                     * 自定义的类型标记。
                     * @example `1`
                     */
                    LiveInputType: number;
                    /**
                     * 点播文件ID。
                     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
                     */
                    ResourceId: string;
                    /**
                     * 资源素材类型。
                     * @example `vod`
                     */
                    ResourceType: string;
                    /**
                     * 资源URL。
                     * @example `http://**​/atestObject**.m3u8`
                     */
                    ResourceUrl: string;
                };
                /**
                 * 节目ID。
                 * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
                 */
                ShowId: string;
                /**
                 * 播放节目名称。
                 * @example `liveShow****`
                 */
                ShowName: string;
            }[];
        };
        /**
         * 播单默认循环次数。始终为0。
         * @example `0`
         */
        ShowListRepeatTimes: number;
        /**
         * 整个节目单播放的循环次数。
         * @example `1`
         */
        TotalShowListRepeatTimes: number;
    };
}
