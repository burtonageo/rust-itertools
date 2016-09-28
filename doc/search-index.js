var searchIndex = {};
searchIndex["itertools"] = {"doc":"Itertools — extra iterator adaptors, functions and macros.","items":[[4,"Either","itertools","`Either` represents an alternative holding one value out of\neither of the two possible values.",null,null],[13,"Left","","A value of type `L`.",0,null],[13,"Right","","A value of type `R`.",0,null],[4,"Diff","","A type returned by the [`diff_with`](./fn.diff_with.html) function.",null,null],[13,"FirstMismatch","","The index of the first non-matching element along with both iterator&#39;s remaining elements\nstarting with the first mis-match.",1,null],[13,"Shorter","","The total number of elements that were in `J` along with the remaining elements of `I`.",1,null],[13,"Longer","","The total number of elements that were in `I` along with the remaining elements of `J`.",1,null],[4,"MinMaxResult","","`MinMaxResult` is an enum returned by `minmax`. See `Itertools::minmax()` for\nmore detail.",null,null],[13,"NoElements","","Empty iterator",2,null],[13,"OneElement","","Iterator with one element, so the minimum and maximum are the same",2,null],[13,"MinMax","","More than one element in the iterator, the first element is not larger\nthan the second",2,null],[4,"EitherOrBoth","","A value yielded by `ZipLongest`.\nContains one or two values, depending on which of the input iterators are exhausted.",null,null],[13,"Both","","Neither input iterator is exhausted yet, yielding two values.",3,null],[13,"Left","","The parameter iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the `self` iterator.",3,null],[13,"Right","","The `self` iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the parameter iterator.",3,null],[4,"FoldWhile","","An enum used for controlling the execution of `.fold_while()`.",null,null],[13,"Continue","","Continue folding with this value",4,null],[13,"Done","","Fold is complete and will return this value",4,null],[5,"cons_tuples","","Create an iterator that maps for example iterators of\n`((A, B), C)` to `(A, B, C)`.",null,{"inputs":[{"name":"i"}],"output":{"name":"constuples"}}],[5,"diff_with","","Compares every element yielded by both `i` and `j` with the given function in lock-step and\nreturns a `Diff` which describes how `j` differs from `i`.",null,{"inputs":[{"name":"i"},{"name":"j"},{"name":"f"}],"output":{"name":"option"}}],[5,"repeat_call","","An iterator source that produces elements indefinitely by calling\na given closure.",null,{"inputs":[{"name":"f"}],"output":{"name":"repeatcall"}}],[5,"unfold","","Creates a new unfold source with the specified closure as the &quot;iterator\nfunction&quot; and an initial state to eventually pass to the closure",null,{"inputs":[{"name":"st"},{"name":"f"}],"output":{"name":"unfold"}}],[5,"multizip","","An iterator that generalizes *.zip()* and allows running multiple iterators in lockstep.",null,{"inputs":[{"name":"u"}],"output":{"name":"zip"}}],[5,"interleave","","Create an iterator that interleaves elements in `i` and `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[5,"merge","","Create an iterator that merges elements in `i` and `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"merge"}}],[5,"multipeek","","An iterator adaptor that allows the user to peek at multiple `.next()`\nvalues without advancing the base iterator.",null,{"inputs":[{"name":"i"}],"output":{"name":"multipeek"}}],[5,"put_back","","Create an iterator where you can put back a single item",null,{"inputs":[{"name":"i"}],"output":{"name":"putback"}}],[5,"put_back_n","","Create an iterator where you can put back multiple values to the front\nof the iteration.",null,{"inputs":[{"name":"i"}],"output":{"name":"putbackn"}}],[5,"kmerge","","Create an iterator that merges elements of the contained iterators.",null,{"inputs":[{"name":"i"}],"output":{"name":"kmerge"}}],[5,"zip_eq","","Iterate `i` and `j` in lock step.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"zipeq"}}],[5,"rciter","","Return an iterator inside a `Rc&lt;RefCell&lt;_&gt;&gt;` wrapper.",null,{"inputs":[{"name":"i"}],"output":{"name":"rciter"}}],[5,"enumerate","","Iterate `iterable` with a running index.",null,{"inputs":[{"name":"i"}],"output":{"name":"enumerate"}}],[5,"rev","","Iterate `iterable` in reverse.",null,{"inputs":[{"name":"i"}],"output":{"name":"rev"}}],[5,"zip","","Iterate `i` and `j` in lock step.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"zip"}}],[5,"chain","","Create an iterator that first iterates `i` and then `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"chain"}}],[5,"cloned","","Create an iterator that clones each element from &amp;T to T",null,{"inputs":[{"name":"i"}],"output":{"name":"cloned"}}],[5,"fold","","Perform a fold operation over the iterable.",null,{"inputs":[{"name":"i"},{"name":"b"},{"name":"f"}],"output":{"name":"b"}}],[5,"all","","Test whether the predicate holds for all elements in the iterable.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"bool"}}],[5,"any","","Test whether the predicate holds for any elements in the iterable.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"bool"}}],[5,"max","","Return the maximum value of the iterable.",null,{"inputs":[{"name":"i"}],"output":{"name":"option"}}],[5,"min","","Return the minimum value of the iterable.",null,{"inputs":[{"name":"i"}],"output":{"name":"option"}}],[5,"join","","Combine all iterator elements into one String, seperated by `sep`.",null,{"inputs":[{"name":"i"},{"name":"str"}],"output":{"name":"string"}}],[5,"sorted","","Collect all the iterable&#39;s elements into a sorted vector in ascending order.",null,{"inputs":[{"name":"i"}],"output":{"name":"vec"}}],[5,"equal","","Return `true` if both iterators produce equal sequences\n(elements pairwise equal and sequences of the same length),\n`false` otherwise.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"bool"}}],[5,"assert_equal","","Assert that two iterators produce equal sequences, with the same\nsemantics as *equal(a, b)*.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":null}],[5,"partition","","Partition a sequence using predicate `pred` so that elements\nthat map to `true` are placed before elements which map to `false`.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"usize"}}],[0,"structs","","The concrete iterator types.",null,null],[3,"Dedup","itertools::structs","An iterator adaptor that removes repeated duplicates.",null,null],[3,"Interleave","","An iterator adaptor that alternates elements from two iterators until both\nrun out.",null,null],[3,"InterleaveShortest","","An iterator adaptor that alternates elements from the two iterators until\none of them runs out.",null,null],[3,"Product","","An iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `I` and `J`.",null,null],[3,"PutBack","","An iterator adaptor that allows putting back a single\nitem to the front of the iterator.",null,null],[3,"PutBackN","","An iterator adaptor that allows putting multiple\nitems in front of the iterator.",null,null],[3,"Batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",null,null],[3,"Step","","An iterator adaptor that steps a number elements in the base iterator\nfor each iteration.",null,null],[3,"Merge","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MergeBy","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MultiPeek","","See [`multipeek()`](../fn.multipeek.html) for more information.",null,null],[3,"TakeWhileRef","","An iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate returns `true`.",null,null],[3,"WhileSome","","An iterator adaptor that filters `Option&lt;A&gt;` iterator elements\nand produces `A`. Stops on the first `None` encountered.",null,null],[3,"Coalesce","","An iterator adaptor that may join together adjacent elements.",null,null],[3,"TupleCombinations","","An iterator to iterate through all combinations in a `Clone`-able iterator that produces tuples\nof a specific size.",null,null],[3,"Combinations","","An iterator to iterate through all the `n`-length combinations in an iterator.",null,null],[3,"Unique","","An iterator adapter to filter out duplicate elements.",null,null],[3,"UniqueBy","","An iterator adapter to filter out duplicate elements.",null,null],[3,"Flatten","","An iterator adapter to simply flatten a structure.",null,null],[3,"ConsTuples","","An iterator that maps an iterator of tuples like\n`((A, B), C)` to an iterator of `(A, B, C)`.",null,null],[3,"Format","","Format all iterator elements lazily, separated by `sep`.",null,null],[3,"FormatWith","","Format all iterator elements lazily, separated by `sep`.",null,null],[3,"IntoChunks","","`ChunkLazy` is the storage for a lazy chunking operation.",null,null],[3,"Chunk","","An iterator for the elements in a single chunk.",null,null],[3,"Chunks","","An iterator that yields the Chunk iterators.",null,null],[3,"GroupBy","","`GroupBy` is the storage for the lazy grouping operation.",null,null],[3,"Group","","An iterator for the elements in a single group.",null,null],[3,"Groups","","An iterator that yields the Group iterators.",null,null],[3,"Intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",null,null],[3,"KMerge","","An iterator adaptor that merges an abitrary number of base iterators in ascending order.\nIf all base iterators are sorted (ascending), the result is sorted.",null,null],[3,"PadUsing","","An iterator adaptor that pads a sequence to a minimum length by filling\nmissing elements using a closure.",null,null],[3,"RcIter","","A wrapper for `Rc&lt;RefCell&lt;I&gt;&gt;`, that implements the `Iterator` trait.",null,null],[12,"rciter","","The boxed iterator.",5,null],[3,"RepeatN","","An iterator that repeats an element exactly *n* times.",null,null],[3,"RepeatCall","","See [`repeat_call`](../fn.repeat_call.html) for more information.",null,null],[3,"Unfold","","See [`unfold`](../fn.unfold.html) for more information.",null,null],[12,"state","","Internal state that will be passed to the closure on the next iteration",6,null],[3,"Tee","","One half of an iterator pair where both return the same elements.",null,null],[3,"ZipEq","","An iterator which iterates two other iterators simultaneously",null,null],[3,"ZipLongest","","An iterator which iterates two other iterators simultaneously",null,null],[3,"Zip","","See [`multizip`](fn.multizip.html) for more information.",null,null],[11,"clone","","",7,null],[11,"next","","",7,null],[11,"clone","","",8,null],[11,"next","","",8,null],[11,"size_hint","","",8,null],[11,"clone","","",9,null],[11,"with_value","","put back value `value` (builder method)",9,null],[11,"into_parts","","Split the `PutBack` into its parts.",9,null],[11,"put_back","","Put back a single value to the front of the iterator.",9,null],[11,"next","","",9,null],[11,"size_hint","","",9,null],[11,"put_back","","Puts x in front of the iterator.\nThe values are yielded in order.",10,null],[11,"next","","",10,null],[11,"size_hint","","",10,null],[11,"clone","","",10,null],[11,"clone","","",11,null],[11,"next","","",11,null],[11,"size_hint","","",11,null],[11,"clone","","",12,null],[11,"next","","",12,null],[11,"size_hint","","",12,null],[11,"clone","","",13,null],[11,"next","","",13,null],[11,"size_hint","","",13,null],[11,"clone","","",14,null],[11,"next","","",14,null],[11,"size_hint","","",14,null],[11,"clone","","",15,null],[11,"next","","",15,null],[11,"size_hint","","",15,null],[11,"clone","","",16,null],[11,"peek","","Works exactly like `.next()` with the only difference that it doesn&#39;t\nadvance itself. `.peek()` can be called multiple times, to peek\nfurther ahead.",16,null],[11,"next","","",16,null],[11,"size_hint","","",16,null],[11,"clone","","",17,null],[11,"next","","",17,null],[11,"size_hint","","",17,null],[11,"clone","","",18,null],[11,"next","","",18,null],[11,"size_hint","","",18,null],[11,"next","","",19,null],[11,"size_hint","","",19,null],[11,"clone","","",20,null],[11,"next","","",20,null],[11,"size_hint","","",20,null],[11,"next","","",21,null],[11,"next","","",22,null],[11,"clone","","",23,null],[11,"next","","",23,null],[11,"size_hint","","",23,null],[11,"next","","",24,null],[11,"size_hint","","",24,null],[11,"clone","","",24,null],[11,"clone","","",25,null],[11,"next","","",25,null],[11,"next_back","","",25,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"next_back","","",26,null],[11,"clone","","",26,null],[11,"clone","","",27,null],[11,"fmt","","",28,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"next","","",29,null],[11,"drop","","",30,null],[11,"next","","",30,null],[11,"next","","",31,null],[11,"drop","","",32,null],[11,"next","","",32,null],[11,"clone","","",33,null],[11,"next","","",33,null],[11,"size_hint","","",33,null],[11,"clone","","",34,null],[11,"next","","",34,null],[11,"size_hint","","",34,null],[11,"clone","itertools","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"fmt","","",2,null],[11,"into_option","","`into_option` creates an `Option` of type `(T, T)`. The returned `Option`\nhas variant `None` if and only if the `MinMaxResult` has variant\n`NoElements`. Otherwise variant `Some(x, y)` is returned where `x &lt;= y`.\nIf `MinMaxResult` has variant `OneElement(x)`, performing this operation\nwill make one clone of `x`.",2,null],[11,"clone","itertools::structs","",35,null],[11,"next","","",35,null],[11,"size_hint","","",35,null],[11,"next_back","","",35,null],[11,"clone","","",5,null],[11,"next","","",5,null],[11,"size_hint","","",5,null],[11,"next_back","","",5,null],[11,"new","","Create a new **RepeatN** with **n** repetitions.",36,{"inputs":[{"name":"a"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",36,null],[11,"size_hint","","",36,null],[11,"next_back","","",36,null],[11,"next","","",37,null],[11,"size_hint","","",37,null],[11,"clone","","",6,null],[11,"next","","",6,null],[11,"size_hint","","",6,null],[11,"next","","",38,null],[11,"size_hint","","",38,null],[11,"clone","","",39,null],[11,"next","","",39,null],[11,"size_hint","","",39,null],[11,"clone","","",40,null],[11,"next","","",40,null],[11,"size_hint","","",40,null],[11,"next_back","","",40,null],[11,"clone","itertools","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"fmt","","",3,null],[11,"clone","itertools::structs","",41,null],[11,"new","","Deprecated: renamed to multizip",41,{"inputs":[{"name":"u"}],"output":{"name":"zip"}}],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[11,"from","","",41,null],[11,"next","","",41,null],[11,"size_hint","","",41,null],[8,"Itertools","itertools","The trait `Itertools`: extra iterator adaptors and methods for iterators.",null,null],[11,"interleave","","Alternate elements from two iterators until both\nrun out.",42,null],[11,"interleave_shortest","","Alternate elements from two iterators until one of them runs out.",42,null],[11,"intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",42,null],[11,"zip_longest","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of two optional elements.",42,null],[11,"zip_eq","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of elements.",42,null],[11,"batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",42,null],[11,"group_by","","Return an *iterable* that can group iterator elements.\nConsecutive elements that map to the same key (“runs”), are assigned\nto the same group.",42,null],[11,"group_by_lazy","","",42,null],[11,"chunks","","Return an *iterable* that can chunk the iterator.",42,null],[11,"chunks_lazy","","",42,null],[11,"tee","","Split into an iterator pair that both yield all elements from\nthe original iterator.",42,null],[11,"step","","Return an iterator adaptor that steps `n` elements in the base iterator\nfor each iteration.",42,null],[11,"merge","","Return an iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",42,null],[11,"merge_by","","Return an iterator adaptor that merges the two base iterators in order.\nThis is much like `.merge()` but allows for a custom ordering.",42,null],[11,"kmerge","","Return an iterator adaptor that flattens an iterator of iterators by\nmerging them in ascending order.",42,null],[11,"cartesian_product","","Return an iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `self` and `J`.",42,null],[11,"coalesce","","Return an iterator adaptor that uses the passed-in closure to\noptionally merge together consecutive elements.",42,null],[11,"dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",42,null],[11,"unique","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration. Duplicates\nare detected using hash and equality.",42,null],[11,"unique_by","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration.",42,null],[11,"take_while_ref","","Return an iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate `f` returns `true`.",42,null],[11,"while_some","","Return an iterator adaptor that filters `Option&lt;A&gt;` iterator elements\nand produces `A`. Stops on the first `None` encountered.",42,null],[11,"tuple_combinations","","Return an iterator adaptor that iterates over the combinations of the\nelements from an iterator.",42,null],[11,"combinations","","Return an iterator adaptor that iterates over the `n`-length combinations of\nthe elements from an iterator.",42,null],[11,"pad_using","","Return an iterator adaptor that pads the sequence to a minimum length of\n`min` by filling missing elements using a closure `f`.",42,null],[11,"flatten","","Unravel a nested iterator.",42,null],[11,"find_position","","Find the position and value of the first element satisfying a predicate.",42,null],[11,"dropping","","Consume the first `n` elements from the iterator eagerly,\nand return the same iterator again.",42,null],[11,"dropping_back","","Consume the last `n` elements from the iterator eagerly,\nand return the same iterator again.",42,null],[11,"foreach","","Run the closure `f` eagerly on each element of the iterator.",42,null],[11,"collect_vec","","`.collect_vec()` is simply a type specialization of `.collect()`,\nfor convenience.",42,null],[11,"set_from","","Assign to each reference in `self` from the `from` iterator,\nstopping at the shortest of the two iterators.",42,null],[11,"join","","Combine all iterator elements into one String, seperated by `sep`.",42,null],[11,"format","","Format all iterator elements, separated by `sep`.",42,null],[11,"format_default","","",42,null],[11,"format_with","","Format all iterator elements, separated by `sep`.",42,null],[11,"fold_results","","Fold `Result` values from an iterator.",42,null],[11,"fold_options","","Fold `Option` values from an iterator.",42,null],[11,"fold1","","Accumulator of the elements in the iterator.",42,null],[11,"fold_while","","An iterator adaptor that applies a function, producing a single, final value.",42,null],[11,"sorted","","Collect all iterator elements into a sorted vector in ascending order.",42,null],[11,"sorted_by","","Collect all iterator elements into a sorted vector.",42,null],[11,"partition_map","","Collect all iterator elements into one of two\npartitions. Unlike `Iterator::partition`, each partition may\nhave a distinct type.",42,null],[11,"minmax","","Return the minimum and maximum elements in the iterator.",42,null],[11,"minmax_by_key","","Return the minimum and maximum element of an iterator, as determined by\nthe specified function.",42,null],[11,"minmax_by","","Return the minimum and maximum element of an iterator, as determined by\nthe specified comparison function.",42,null],[14,"iproduct","","Create an iterator over the “cartesian product” of iterators.",null,null],[14,"izip","","Create an iterator running multiple iterators in lockstep.",null,null],[11,"is_left","","Return true if the value is the `Left` variant.",0,null],[11,"is_right","","Return true if the value is the `Right` variant.",0,null],[11,"left","","Convert the left side of `Either&lt;L, R&gt;` to an `Option&lt;L&gt;`.",0,null],[11,"right","","Convert the right side of `Either&lt;L, R&gt;` to an `Option&lt;R&gt;`.",0,null],[11,"as_ref","","Convert `&amp;Either&lt;L, R&gt;` to `Either&lt;&amp;L, &amp;R&gt;`.",0,null],[11,"as_mut","","Convert `&amp;mut Either&lt;L, R&gt;` to `Either&lt;&amp;mut L, &amp;mut R&gt;`.",0,null],[11,"flip","","Convert `Either&lt;L, R&gt;` to `Either&lt;R, L&gt;`.",0,null],[11,"map_left","","Apply the function `f` on the value in the `Left` variant if it is present.",0,null],[11,"map_right","","Apply the function `f` on the value in the `Right` variant if it is present.",0,null],[11,"either","","Apply one of two functions depending on contents, unifying their result. If the value is\n`Left(L)` then the first function `f` is applied; if it is `Right(R)` then the second\nfunction `g` is applied.",0,null],[11,"deref_mut","","",0,null],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"result"}],"output":{"name":"either"}}],[11,"partial_cmp","","",0,null],[11,"lt","","",0,null],[11,"le","","",0,null],[11,"gt","","",0,null],[11,"ge","","",0,null],[11,"hash","","",0,null],[11,"as_ref","","",0,null],[11,"clone","","",0,null],[11,"deref","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"into","","",0,null],[11,"cmp","","",0,null],[11,"fmt","","",0,null],[11,"next_back","","",0,null],[11,"next","","",0,null],[11,"size_hint","","",0,null],[11,"as_mut","","",0,null]],"paths":[[4,"Either"],[4,"Diff"],[4,"MinMaxResult"],[4,"EitherOrBoth"],[4,"FoldWhile"],[3,"RcIter"],[3,"Unfold"],[3,"Interleave"],[3,"InterleaveShortest"],[3,"PutBack"],[3,"PutBackN"],[3,"Product"],[3,"Batching"],[3,"Step"],[3,"Merge"],[3,"MergeBy"],[3,"MultiPeek"],[3,"Coalesce"],[3,"Dedup"],[3,"TakeWhileRef"],[3,"WhileSome"],[3,"TupleCombinations"],[3,"Combinations"],[3,"UniqueBy"],[3,"Unique"],[3,"Flatten"],[3,"ConsTuples"],[3,"Format"],[3,"FormatWith"],[3,"Groups"],[3,"Group"],[3,"Chunks"],[3,"Chunk"],[3,"Intersperse"],[3,"KMerge"],[3,"PadUsing"],[3,"RepeatN"],[3,"RepeatCall"],[3,"Tee"],[3,"ZipEq"],[3,"ZipLongest"],[3,"Zip"],[8,"Itertools"]]};
initSearch(searchIndex);
