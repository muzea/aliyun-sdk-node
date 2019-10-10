interface MoveAppResourceRequest {
    "RegionId"?: string;
    /**
    * 资源类型。
    * 支持video（视频），image（图片），attached（辅助媒资）。
    * @example `video`
    */ "ResourceType": string;
    /**
    * 资源ID， 多个以英文逗号分隔，一次最多20条。
    * @example `xxx,xxx`
    */ "ResourceIds": string;
    /**
    * 目标应用ID。
    * @example `app-xxxxx`
    */ "TargetAppId": string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
}
export { MoveAppResourceRequest };