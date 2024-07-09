import { ConfigNetStatusRequest } from "./ConfigNetStatus/req";
import { ConfigNetStatusResponse } from "./ConfigNetStatus/res";
import { QueryNetListRequest } from "./QueryNetList/req";
import { QueryNetListResponse } from "./QueryNetList/res";
import { ListInstanceRequest } from "./ListInstance/req";
import { ListInstanceResponse } from "./ListInstance/res";

interface DDOSDIVERSION {
    /**
     * 进行网段宣告配置。
     */
    ConfigNetStatus(query: ConfigNetStatusRequest): Promise<ConfigNetStatusResponse>;
    /**
     * 查询代播的网段列表。
     */
    QueryNetList(query: QueryNetListRequest): Promise<QueryNetListResponse>;
    /**
     * 查询实例列表。
     */
    ListInstance(query: ListInstanceRequest): Promise<ListInstanceResponse>;
}
export default DDOSDIVERSION;
