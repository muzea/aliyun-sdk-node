export interface UploadReportRequest {
    /**
     * 部门 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "DepartmentId"?: string;
    /**
     * 用户 ID
     * @example `	 59b0bbfe-929b-4a8c-9833-3ce70b4bad34`
     */
    "UserId"?: string;
    /**
     * 应用 ID
     * @example `90c2459a-4c73-4ab7-8a6b-e550d62fbd8c`
     */
    "AppId"?: string;
    /**
     * 业务流程 ID
     * @example `iuhptk3w-2021122017`
     */
    "DetectProcessId"?: string;
    /**
     * mrtc 房间 ID
     * @example `6000028888875`
     */
    "RoomId"?: string;
    /**
     * 要上传的视频地址
     * @example `https://mogo-apps-sh.oss-cn-shanghai-internal.aliyuncs.com/tmp/d2720028b53d384c6d3fca32e45209d1_20_src.mp4`
     */
    "VideoUrl"?: string;
    /**
     * meta 文件地址
     * @example `http://abc.oss.aliyuncs.com/1/12_03_20_03_36toubaoren.mp4.meta`
     */
    "MetaUrl"?: string;
    /**
     * 检测流程的完整 URL
     * @example `http://abc.oss.aliyuncs.com/1/12_03_20_03_36toubaoren.mp4.json`
     */
    "ResultUrl"?: string;
    /**
     * 录制开始时间，格式 yyyy-MM-dd'T'HH:mm:ss'Z'
     * @example `2022-01-04T08%3A45%3A37Z`
     */
    "RecordAt"?: string;
    /**
     * 视频时长
     * @example `12`
     */
    "Duration"?: number;
    /**
     * 标识本地双录和远程双录（LOCAL 或 REMOTE）
     * @example `LOCAL`
     */
    "Type"?: string;
    /**
     * 客户端版本号
     * @example `1.0.003`
     */
    "ClientVersion"?: string;
    /**
     * 对账 ID
     * @example `6c94f2a7-632d-4ea0-aa06-a97800a9060f`
     */
    "FeeId"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
    /**
     * mrtc录制ID
     * @example `record_6570315480571566****`
     */
    "RtcRecordId"?: string;
    /**
     * 业务ID，用户自定义
     * @example `ads32efef43`
     */
    "OuterBusinessId"?: string;
    /**
     * 用户自定义角色
     * @example `0`
     */
    "Role"?: string;
    /**
     * 标识单流还是混流
     * @example `MIX`
     */
    "VideoType"?: string;
}
