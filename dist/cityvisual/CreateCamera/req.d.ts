interface CreateCameraRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 工作组ID。
    * @example `511`
    */ "WorkGroupId": string;
    /**
    * 视频点位ID。
    * @example `003_2`
    */ "CameraId": string;
    /**
    * 实例ID。
    * @example `cityvisual-xxxx`
    */ "InstanceId": string;
    /**
    * 视频点位经纬度坐标。
    * @example `{"latitude":"30.245853","longitude":"120.209947"}`
    */ "LocationInfo"?: string;
    /**
    * 实时视频点位网络url。
    * @example `002_1`
    */ "InviteUri"?: string;
    /**
    * 离线视频文件的OSS地址。
    * @example `https://cityvisual.oss-cn-shanghai.aliyuncs.com/xxx.mp4`
    */ "OssPath"?: string;
    /**
    * 视频点位名称。
    * @example `name`
    */ "CameraName": string;
}
export { CreateCameraRequest };