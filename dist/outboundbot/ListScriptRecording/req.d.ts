export interface ListScriptRecordingRequest {
    /**
     * 录音所属实例id
     * @example `c209abb3-6804-4a75-b2c7-dd55c8c61b6a
    `
     */
    "InstanceId": string;
    /**
     * 录音所属场景id
     * @example `d004cfd2-6a81-491c-83c6-cbe186620c95
    `
     */
    "ScriptId": string;
    /**
     * 录音id列表(JSON格式)
     * @example `["d17d5bfa-4972-4389-9718-f9602edabe48"]`
     */
    "UuidsJson"?: string;
    /**
     * 录音状态
     * @example `[
         "8"
    ]`
     */
    "StatesJson"?: string;
    /**
     * 搜索条件：可根据录音名称、录音内容查询
     * @example `您好`
     */
    "Search"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数
     * @example `10`
     */
    "PageSize": number;
    "RefIdsJson"?: string;
}
