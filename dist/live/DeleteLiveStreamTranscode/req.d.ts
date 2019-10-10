interface DeleteLiveStreamTranscodeRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `app`
    */ "App": string;
    /**
    * 转码模版。目前有：
    * - 标准质量模板：**lld**、**lsd**、**lhd**、**lud**。
    * - 高品质（窄带高清™转码）模板：**ld**、**sd**、**hd**、**ud**。
    * @example `lld`
    */ "Template": string;
    /**
    * 您的加速域名。
    * @example `play.aliyunlive.com`
    */ "Domain": string;
    "OwnerId"?: number;
}
export { DeleteLiveStreamTranscodeRequest };