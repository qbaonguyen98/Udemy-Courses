// For data privacy, instead of using IIFEs, we use Blocks

// This is a block
{
    let name = 'Reus';
    var age = 21;
}

try {
    console.log(name);
} catch {
    console.log('Block-scoped');
}

console.log(age);