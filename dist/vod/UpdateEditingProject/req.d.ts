export interface UpdateEditingProjectRequest {
    /**
     * 云剪辑工程ID。
     * @example `4ee4b97e27*****b525142a6b2`
     */
    "ProjectId": string;
    /**
     * 云剪辑工程标题。
     * @example `testtimeline`
     */
    "Title"?: string;
    /**
     * 云剪辑工程时间线。具体结构定义，请参见[Timeline](~~52839~~)。
     * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac500c*****a54328bc3443"},{"MediaId":"da87a9cff64*****d88bc6d8326e4"}]}]}`
     */
    "Timeline"?: string;
    /**
     * 云剪辑工程描述。
     * @example `testtimeline001desciption`
     */
    "Description"?: string;
    /**
     * 云剪辑工程封面。
     * @example `https://****.com/6AB4D0E1E1C7446888****.png`
     */
    "CoverURL"?: string;
}
