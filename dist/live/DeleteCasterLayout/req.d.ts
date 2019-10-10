interface DeleteCasterLayoutRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 布局ID。
    * @example `21926b36-7dd2-4fde-ae25-51b5bc8e52d8`
    */ "LayoutId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
}
export { DeleteCasterLayoutRequest };