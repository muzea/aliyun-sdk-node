interface AddLiveRecordVodConfigRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * 支持通配符（*），代表该域名下所有的AppName，不能与普通录制设置的AppName重复。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 点播转码模板组ID。
    * @example `e2d796d3bb5fd8049d32bff62f940711`
    */ "VodTranscodeGroupId": string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    /**
    * 流名称。
    * @example `stream`
    */ "StreamName"?: string;
    /**
    * 周期录制时长，单位为秒。默认值为**3600**，可取值为**300~21600**。
    * @example `300`
    */ "CycleDuration"?: number;
    /**
    * 是否开启自动合并。
    * - **ON**：开启
    * - **OFF**：关闭
    * @example `OFF`
    */ "AutoCompose"?: string;
    /**
    * 登录点播控制台，找存储管理，复制存储地址
    * @example `xxx-tjptr2vatm.oss-cn-shanghai.aliyuncs.com`
    */ "StorageLocation"?: string;
    /**
    * 自动合并点播转码模板组ID。
    * <note>如果开启了自动合并，则该字段必填。</note>
    * @example `XXXXXX`
    */ "ComposeVodTranscodeGroupId"?: string;
}
export { AddLiveRecordVodConfigRequest };