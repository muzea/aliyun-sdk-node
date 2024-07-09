export interface ExtractAddressResponse {
    /**
     * RequestId
     * @example `E0627DDE-28D7-4C00-A611-E047DF81AF05`
     */
    RequestId: string;
    /**
     * start:原文中字段起始位置
     * end:原文中字段结束位置
     * type:字段类型，LOC是指location，地址；PER是指person，人名；TEL是指telephone，电话号码。
     * word：识别出的实体字段
     * @example `{"location_extract":[{"start":0,"end":8,"type":"LOC","word":"文一西路969号"}],"time_used":{"rt":{"location_extract":"0.008937358856201172"},"start":"1589799727.438162"},"status":"OK"}`
     */
    Data: string;
}
