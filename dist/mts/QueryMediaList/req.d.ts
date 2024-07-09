export interface QueryMediaListRequest {
    /**
     * 需要查询的媒体文件ID列表，可以登录MPS控制台，通过**媒体管理** > **媒体列表**获取。用半角逗号（,）分隔，一次最多查询10个。
     * @example `3e1cd21131a94525be55acf65888****,e26cfa29e784402388463f61dbec****`
     */
    "MediaIds": string;
    /**
     * 返回结果中是否包含播放信息。
     * - 取值：true（是）、false（否）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludePlayList"?: boolean;
    /**
     * 返回结果中是否包含截图信息。
     * - 取值：true（是）、false（否）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludeSnapshotList"?: boolean;
    /**
     * 返回结果中是否包含媒体信息。
     * - 取值：true（是）、false（否）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludeMediaInfo"?: boolean;
    /**
     * 返回结果中是否包含摘要。
     * - 取值：true（是）、false（否）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludeSummaryList"?: boolean;
}
