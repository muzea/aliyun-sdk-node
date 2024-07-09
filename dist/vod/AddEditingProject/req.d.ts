export interface AddEditingProjectRequest {
    /**
     * 云剪辑工程标题。
     * @example `testtimeline`
     */
    "Title": string;
    /**
     * 云剪辑工程描述。
     * @example `testtimeline001desciption`
     */
    "Description"?: string;
    /**
     * 云剪辑工程时间线。JSON格式。具体结构定义，请参见[Timeline](~~52839~~)。
     * 当该字段为空时，则创建一个空的时间线，且云剪辑工程的总时长为0。
     * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac5006aed55a54328bc3443****"},{"MediaId":"95948ddba24446b6aed5db985e78****"}]}]}`
     */
    "Timeline"?: string;
    /**
     * 云剪辑工程封面。如果为空且时间线上的video轨已经存在素材，则默认选取时间线上第一个素材封面。
     * @example `https://demo.aliyundoc.com/6AB4D0E1E1C74468883516C2349D1FC2-6-2.png`
     */
    "CoverURL"?: string;
    /**
     * 服务地域。
     * @example `cn-shanghai`
     */
    "Division"?: string;
}
