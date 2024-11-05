/**
 * Prefer Meteor._AsynchronousQueue, but fall back to synchronous queue
 * for Meteor versions prior to v3.
 *
 * @type {{
 *  new(): {
 *    runTask(task: Function): void;
 *    queueTask(task: Function): void;
 *    flush(): void;
 *    drain(): void;
 *    safeToRunTask(): boolean;
 *  }
 * }}
 */
export const MeteorQueue = !!Meteor._AsynchronousQueue
  ? Meteor._AsynchronousQueue
  : Meteor._SynchronousQueue;