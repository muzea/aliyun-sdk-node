import { DeleteProfileCatalogRequest } from "./DeleteProfileCatalog/req";
import { DeleteProfileCatalogResponse } from "./DeleteProfileCatalog/res";
import { ListAlgorithmNamesByDeviceIdsRequest } from "./ListAlgorithmNamesByDeviceIds/req";
import { ListAlgorithmNamesByDeviceIdsResponse } from "./ListAlgorithmNamesByDeviceIds/res";
import { AddAiotPersonTableItemRequest } from "./AddAiotPersonTableItem/req";
import { AddAiotPersonTableItemResponse } from "./AddAiotPersonTableItem/res";

interface VCS {
    /**
     * 创建一个删除人员分组实例。
     */
    DeleteProfileCatalog(query: DeleteProfileCatalogRequest): Promise<DeleteProfileCatalogResponse>;
    /**
     * 查询设备被哪些算法计算，可支持单个设备或者批量设备。
     */
    ListAlgorithmNamesByDeviceIds(query: ListAlgorithmNamesByDeviceIdsRequest): Promise<ListAlgorithmNamesByDeviceIdsResponse>;
    /**
     * AddAiotPersonTableItem
     */
    AddAiotPersonTableItem(query: AddAiotPersonTableItemRequest): Promise<AddAiotPersonTableItemResponse>;
}
export default VCS;
