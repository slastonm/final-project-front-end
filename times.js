class PriorityQueue { 
  constructor() {
    this.queue = [];
    this.counter = 0;
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority, timestamp: this.counter++ });
  }

  peek(mode) {
    if (this.queue.length === 0) return null;
    this.queue.push({item, priority, timestamp:this.counter++});
  }


  dequeue(mode) {
    if (this.queue.length === 0) return null;
    return this._getElement(mode, true);
  }

  _getElement(mode, remove) {
    let index;
    if (mode === 'highest') {
      index = this.queue.reduce((bestIdx, el, i, arr) =>
        el.priority > arr[bestIdx].priority ? i : bestIdx, 0);
    } else if (mode === 'lowest') {
      index = this.queue.reduce((bestIdx, el, i, arr) =>
        el.priority < arr[bestIdx].priority ? i : bestIdx, 0);
    } else if (mode === 'oldest') {
      index = this.queue.reduce((oldestIdx, el, i, arr) =>
        el.priority < arr[oldestIdx].priority ? i : oldestIdx= 0);
    } else if (mode === 'newest') {
      index = this.queue.reduce((newestIdx, el, i, arr) =>
        el.timestamp > arr[newestIdx].timestamp ? i : newestIdx, 0);
    }

    const element = this.queue[index];
    if (remove) this.queue.splice(index, 1);
    return element.item;
  }
}

const pq = new PriorityQueue();

const events = [
  { name: 'Main event', date: '2025-05-29', priority: 10 },
  { name: 'Dialogues behind bars I', date: '2025-05-29', priority: 8 },
  { name: 'Recoleta banner', date: '2025-05-29', priority: 6 },
  { name: 'Recoleta story', date: '2025-05-29', priority: 7 },
  { name: 'Mane bulletin', date: '2025-06-03', priority: 5 },
  { name: 'Bette: The last film', date: '2025-06-05', priority: 9 },
  { name: 'Dialogues behind bars II', date: '2025-06-19', priority: 8 },
  { name: 'Aleph banner', date: '2025-06-19', priority: 6 },
  { name: 'Aleph story', date: '2025-06-19', priority: 7 },
  { name: 'Farewell, Rayashki rerun', date: '2025-06-20', priority: 4 },
  { name: 'Labs snapshots', date: '2025-06-28', priority: 3 },
];

for (const event of events) {
  pq.enqueue(event, event.priority);
}

console.log('Highest Priority:', pq.peek('highest'));
console.log('Oldest Entry:', pq.peek('oldest'));
console.log('Dequeued Newest:', pq.dequeue('newest'));
console.log('Lowest Priority:', pq.peek('lowest'));

document.addEventListener("DOMContentLoaded", () => { 
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  document.querySelectorAll(".date").forEach(el => {
    const start = new Date(el.dataset.start);
    const end = new Date(el.dataset.end);

    const diffStart = Math.floor((start - today) / (1000 * 60 * 60 * 24));
    const diffEnd = Math.floor((end - today) / (1000 * 60 * 60 * 24));

    const li = el.closest("li");

    if (diffEnd < 0) {
      el.textContent = "";
      el.style.color = "red";
      if (li) li.style.display = "none";

    } else if (diffStart <= 3) {
      const daysLeft = diffEnd + 1;
      el.textContent = daysLeft;

      if (diffStart > 0) {
        el.style.color = "gray";
      } else {
        el.style.color = "green";
      }

      if (li) li.style.display = "list-item";

    } else {
      el.textContent = diffStart;
      el.style.color = "gray";
      if (li) li.style.display = "none";
    }
  });
});
