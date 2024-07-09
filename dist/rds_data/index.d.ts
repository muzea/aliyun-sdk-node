import { ExecuteStatementRequest } from "./ExecuteStatement/req";
import { ExecuteStatementResponse } from "./ExecuteStatement/res";
import { RollbackTransactionRequest } from "./RollbackTransaction/req";
import { RollbackTransactionResponse } from "./RollbackTransaction/res";
import { CommitTransactionRequest } from "./CommitTransaction/req";
import { CommitTransactionResponse } from "./CommitTransaction/res";
import { BeginTransactionRequest } from "./BeginTransaction/req";
import { BeginTransactionResponse } from "./BeginTransaction/res";
import { BatchExecuteStatementRequest } from "./BatchExecuteStatement/req";
import { BatchExecuteStatementResponse } from "./BatchExecuteStatement/res";
import { InsertListRequest } from "./InsertList/req";
import { InsertListResponse } from "./InsertList/res";

interface RDS_DATA {
    /**
     * 调用ExecuteStatement接口对指定数据库执行SQL语句。
     */
    ExecuteStatement(query: ExecuteStatementRequest): Promise<ExecuteStatementResponse>;
    /**
     * 调用RollbackTransaction接口执行事务的回滚，回滚事务会取消其更改。
     */
    RollbackTransaction(query: RollbackTransactionRequest): Promise<RollbackTransactionResponse>;
    /**
     * 调用CommitTransaction接口提交事务变更。
     */
    CommitTransaction(query: CommitTransactionRequest): Promise<CommitTransactionResponse>;
    /**
     * 开启事务。
     */
    BeginTransaction(query: BeginTransactionRequest): Promise<BeginTransactionResponse>;
    /**
     * 调用BatchExecuteStatement接口对一组数据执行批处理SQL语句。
     */
    BatchExecuteStatement(query: BatchExecuteStatementRequest): Promise<BatchExecuteStatementResponse>;
    /**
     * 调用InsertList批量插入数据。
     */
    InsertList(query: InsertListRequest): Promise<InsertListResponse>;
}
export default RDS_DATA;
