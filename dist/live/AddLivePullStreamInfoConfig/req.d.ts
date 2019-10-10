interface AddLivePullStreamInfoConfigRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称
    * @example `testApp`
    */ "AppName": string;
    /**
    * 直播流名
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 用户的直播流所在的源站，多个源站可以填多个地址，用分号分隔
    * @example `live.yourdomain.com`
    */ "SourceUrl": string;
    /**
    * 拉流开始时间，UTC格式, StartTime和EndTime时间间隔在7天内
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime": string;
    /**
    * 拉流结束时间，UTC格式, StartTime和EndTime时间间隔在7天内,且EndTime超过当前时间
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 您的拉流域名为用户的播放域名
    * @example `live.yourdomain.com`
    */ "DomainName": string;
}
export { AddLivePullStreamInfoConfigRequest };