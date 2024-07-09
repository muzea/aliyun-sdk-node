export interface AddShowIntoShowListRequest {
    /**
     * 需要添加的多个节目资源列表，每个资源都有独立的showName，resourceUrl等参数。
     */
    "showList"?: {
        /**
         * 单个节目播放时间长度，单位：秒。
         * >**RepeatTimes**和**Duration**两者只允许设置其中一个。
         * @example `20`
         */
        duration: number;
        /**
         * 自定义的类型标记。
         * @example `1`
         */
        liveInputType: number;
        /**
         * 单个节目播放循环次数，默认为0。
         * >- **RepeatTimes**和**Duration**两者只允许设置其中一个。
         * - RepeatTimes为重复次数，示例：0表示重复0次（实际播放1次），1表示重复1次（实际播放2次），以此类推。
         * @example `0`
         */
        repeatTimes: number;
        /**
         * 点播文件ID。
         * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
         */
        resourceId: string;
        /**
         * 素材类型。取值：
         * - live：直播素材。
         * - vod：点播素材。
         * - pic：图片素材。
         * >- 使用视频点播（VOD）资源，可优先选择托管Bucket资源，自有Bucket资源存在过期风险，如果您选用自有Bucket资源，需注意资源的有效期时间。
         * - 直播文件可支持直播素材和第三方URL。
         * - 点播文件可支持点播素材、图片素材和第三方URL。
         * @example `vod`
         */
        resourceType: string;
        /**
         * 播放文件URL。
         * @example `http://****​/atestObject****.m3u8`
         */
        resourceUrl: string;
        /**
         * 节目名称。
         * @example `liveShow****`
         */
        showName: string;
    }[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 节目名称。
     * @example `liveShow****`
     */
    "ShowName"?: string;
    /**
     * 素材类型。取值：
     * - live：直播素材。
     * - vod：点播素材。
     * - pic：图片素材。
     * >- 使用视频点播（VOD）资源，可优先选择托管Bucket资源，自有Bucket资源存在过期风险，如果您选用自有Bucket资源，需注意资源的有效期时间。- 直播文件可支持直播素材和第三方URL。- 点播文件可支持点播素材、图片素材和第三方URL。
     * @example `vod`
     */
    "ResourceType"?: string;
    /**
     * 播放文件URL。
     * @example `http://****​/atestObject****.m3u8`
     */
    "ResourceUrl"?: string;
    /**
     * 点播文件ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "ResourceId"?: string;
    /**
     * 单个节目播放时间长度，单位：秒。
     * >**RepeatTimes**和**Duration**两者只允许设置其中一个。
     * @example `20`
     */
    "Duration"?: number;
    /**
     * 单个节目播放循环次数，默认为0。
     * > - **RepeatTimes**和**Duration**两者只允许设置其中一个。- RepeatTimes为重复次数，示例：-1表示可无限重复；0表示重复0次（实际播放1次）；1表示重复1次（实际播放2次）；以此类推。
     * @example `0`
     */
    "RepeatTimes"?: number;
    /**
     * 插入到播放列表的位置。位置从0 开始，默认添加到当前节目单的末尾。
     * @example `1`
     */
    "Spot"?: number;
    /**
     * 自定义的类型标记。
     * @example `1`
     */
    "LiveInputType"?: number;
    /**
     * 是否批量添加节目到节目单。取值：
     * - true：批量添加。
     * - false：单个添加。
     * >该参数不填，取值为空时，也表示单个添加。
     * @example `false`
     */
    "isBatchMode"?: boolean;
}
