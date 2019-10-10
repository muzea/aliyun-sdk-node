interface UpdateMPULayoutRequest {
    "RegionId"?: string;
    /**
    * 应用ID，控制台查询。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 任务ID，此ID为旁路直播的标识，需保证唯一。
    * 字符只允许A-Za-z0-9_-，长度限制64字节。
    * @example `abcde`
    */ "TaskId": string;
    "LayoutIds": number[];
    "OwnerId"?: number;
    /**
    * 视频的裁剪模式：
    * - **0**：不保持比例铺满。
    * - **1**：保持比例裁剪。
    * - **2**（默认）：保持比例留边。
    * @example `2`
    */ "CropMode"?: number;
    /**
    * 背景色RGB，默认是**0**（黑色）。
    * @example `0`
    */ "BackgroundColor"?: number;
    "UserPanes"?: string[];
}
export { UpdateMPULayoutRequest };