interface ModifyCameraRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 视频点位名称。
    * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `CameraName`
    */ "CameraName"?: string;
    /**
    * 视频点位经纬度坐标
    * @example `{"latitude":"30.245853","longitude":"120.209947"}`
    */ "LocationInfo"?: string;
    /**
    * 实时视频点位网络url。
    * @example `320599500@xxx`
    */ "InviteUri"?: string;
    /**
    * 视频点位ID，指定待修改的视频点位。
    * @example `003_2`
    */ "CameraId": string;
    /**
    * 视频点位状态：
    * - **ON_LINE**: 在线
    * - **OFF_LINE**: 离线
    * @example `ON_LINE`
    */ "StreamStatus"?: string;
}
export { ModifyCameraRequest };