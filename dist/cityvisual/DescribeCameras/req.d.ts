interface DescribeCamerasRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 视频点位列表的页码。起始值：1。
    * 默认值：**1** 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100。
    * 默认值：**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 视频点位ID。
    * @example `003_2`
    */ "CameraId"?: string;
    /**
    * 视频点位名称。
    * @example `name`
    */ "CameraName"?: string;
    /**
    * 视频点位状态：
    * - **ON_LINE**: 在线
    * - **OFF_LINE**: 离线
    * @example `ON_LINE`
    */ "StreamStatus"?: string;
    /**
    * 接流工作组ID。
    * @example `283`
    */ "WorkGroupId"?: string;
    /**
    * 实例ID。
    * @example `cityvisual-InstanceId`
    */ "InstanceId": string;
}
export { DescribeCamerasRequest };